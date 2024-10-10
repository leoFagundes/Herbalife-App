"use client";

import UserRepositorie from "@/services/repositories/UserRepositorie";
import { UserProps } from "@/types/types";
import { useEffect, useState } from "react";

export default function UseUser(username = "") {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [emails, setEmails] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedUsers: UserProps[] | undefined =
          await UserRepositorie.getAll();

        const currentUser = fetchedUsers?.filter(
          (user) => user.username === username
        )[0];

        const fetchedUsernames = fetchedUsers.map((user) => user.username);
        const fetchedEmails = fetchedUsers.map((user) => user.email);

        setUsers(fetchedUsers);
        setCurrentUser(currentUser);
        setUsernames(fetchedUsernames);
        setEmails(fetchedEmails);
      } catch (error) {
        console.error("Erro ao carregar produtos: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [username]);

  return { isLoading, users, currentUser, usernames, emails };
}
