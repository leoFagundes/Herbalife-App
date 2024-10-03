import { db } from "@/services/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";
import { UserProps } from "@/types/types";

class UserRepositorie {
  static async getAll() {
    try {
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, orderBy("username", "asc"))
      );
      const users: UserProps[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as Omit<UserProps, "id">;
        users.push({ id: doc.id, ...userData });
      });
      return users;
    } catch (error) {
      console.log("Erro ao carregar usuários: ", error);
    }
  }

  static async create(user: Partial<UserProps>) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username: user.username,
        password: user.password,
        personalDescription: user.personalDescription,
        apresentationVideoLink: user.apresentationVideoLink,
        apresentationVideoDescription: user.apresentationVideoDescription,
        whatsapp: user.whatsapp,
        instagram: user.instagram,
        email: user.email,
        image: user.image,
      });
      console.log("Usuário criado com id: ", docRef.id);
      return true;
    } catch (error) {
      console.error("Não foi possível carregar os usuários: ", error);
      return false;
    }
  }

  static async delete(id: string) {
    try {
      await deleteDoc(doc(db, "users", id));
      return id;
    } catch (error) {
      console.error("Erro ao deletar usuário: ", error);
      return null;
    }
  }
}

export default UserRepositorie;
