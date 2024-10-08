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
  getDoc,
  setDoc,
} from "firebase/firestore";
import { ProductProps, UserProps } from "@/types/types";

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
      return [];
    }
  }

  static async getById(id: string) {
    try {
      const userDoc = await doc(db, "users", id);
      const docSnapshot = await getDoc(userDoc);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data() as Omit<UserProps, "id">;
        return { id: docSnapshot.id, ...userData };
      } else {
        console.log("Usuário não encontrado.");
        return null;
      }
    } catch (error) {
      console.error("Erro ao carregar o usuário: ", error);
      return null;
    }
  }

  static async update(id: string, updatedData: Partial<UserProps>) {
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, updatedData);
      console.log("Usuário atualizado com sucesso.");
      return true;
    } catch (error) {
      console.error("Erro ao atualizar o usuário: ", error);
      return false;
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
        products: user.products,
      });
      console.log("Usuário criado com id: ", docRef.id);
      return true;
    } catch (error) {
      console.error("Não foi possível carregar os usuários: ", error);
      return false;
    }
  }

  static async createUserDocument(
    user: { uid: string },
    username: string,
    email: string,
    products: ProductProps[]
  ) {
    try {
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        personalDescription: "",
        apresentationVideoLink: "https://www.youtube.com/watch?v=g0JeI9dSnYE",
        apresentationVideoDescription:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        whatsapp: "",
        instagram: "",
        image: "",
        products: products,
      });
      console.log("Documento do usuário criado com sucesso.");
      return true;
    } catch (error) {
      console.error("Erro ao criar documento do usuário: ", error);
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
