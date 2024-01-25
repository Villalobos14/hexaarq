import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { People } from "@/modules/welcome/domain/People";
import { usePeopleContext } from "../context/WelcomeContextProvider";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("debe ingresar un nombre")
    .min(3, "Nombre debe contener al menos 3 caracteres")
    .max(50, "solo se admiten 50 caracteres"),
  imageUrl: yup
    .string()
    .required("Ingrese una url")
    .test("url", "la url no es valida", (value) => {
      return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpe?g|png|gif|svg|WEBP|JPG)$/.test(
        value
      );
    }),
});

export const useFormPeople = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<People>({
    resolver: yupResolver(schema),
  });
  const { createPeople } = usePeopleContext();

  return {
    register,
    handleSubmit,
    errors,
    reset,
    createPeople,
  };
};
