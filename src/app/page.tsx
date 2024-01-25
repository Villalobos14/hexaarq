"use client";
import { WelcomePeopleCreate } from "@/sections/welcome/components/WelcomePeopleCreate";
import { WelcomePeopleList } from "@/sections/welcome/components/WelcomePeopleList";
import { WelcomeContextProvider } from "@/sections/welcome/context";
import { createLocalStoragePeopleRepository } from "@/modules/welcome/infrastructure/LocalStoragePeopleRepository";

export default function Home() {
  const repository = createLocalStoragePeopleRepository();

  return (
    <WelcomeContextProvider repository={repository}>
      <h1 className="text-4xl text-gray-100">
        Ejemplo Arquitectura Hexagonal
      </h1>
      <p className="mt-4 text-gray-400 text-md">
        prueba de datos
      </p>
      <WelcomePeopleList />
      <WelcomePeopleCreate />
    </WelcomeContextProvider>
  );
}
