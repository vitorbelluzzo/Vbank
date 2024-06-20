"use client";
import { api } from "@/api";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Conta() {
  const [userData, SetUserData] = useState<null | UserDataProps>();

  interface UserDataProps {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
  }

  useEffect(() => {
    const getData = async () => {
      const data: any | UserDataProps = await api;
      SetUserData(data);
    };
    getData();
  }, []);

  const currency = userData?.balance.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="mx-auto">
      {!userData ? (
        <Skeleton className="h-8 w-28 bg-zinc-900/90 rounded" />
      ) : (
        <h1 className="text-zinc-50 font-semibold text-2xl">
          Olá, {userData?.name}
        </h1>
      )}
      {!userData ? (
        <Skeleton className="bg-zinc-900/90 h-24 p-6 rounded mt-3"></Skeleton>
      ) : (
        <div className="bg-zinc-900 p-6 rounded mt-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-light text-zinc-500">
              Total Balance
            </span>
            <span className="text-zinc-50 text-xl">{currency}</span>
          </div>
        </div>
      )}
    </div>
  );
}
