import { Form } from "@/styles/form";
import { Input } from "@/styles/input";
import { PrimaryButton } from "@/styles/button";
import { BgModal, DeleteModal, DivDeleteClientModal, DivModal, TitleModal, DivDeleteContactModal } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactContext } from "@/contexts/contact";
import { useClientContext } from "@/contexts/user";
import { ContactRegister, updateRegister } from "@/validate";
import {DeleteButton} from "@/styles/button"
import { parseCookies } from "nookies";
import { pickBy } from "lodash";

interface IData {
  fullName: string;
  email: string;
  phoneNumber:string
}

export function RegisterContactModal() {
  const { contactRegister } = useContactContext();
  const { closeModal } = useClientContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(ContactRegister),
  });

  const onSubmit = async (data: IData) => {
    const res = await contactRegister(data);
    if (res) {
      closeModal();
    }
  };

  return (
    <BgModal>
      <DivModal>
        <TitleModal>
          <p>Cadastrar Contato</p>
          <span onClick={closeModal}>X</span>
        </TitleModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Nome Completo
            <Input
              type="text"
              id="fullName"
              placeholder="Digite o nome completo"
              {...register("fullName")}
            />
          </label>
          <p>{errors.fullName?.message}</p>

          <label htmlFor="">
            Email
            <Input
              type="text"
              id="email"
              placeholder="Digite o Email"
              {...register("email")}
            />
          </label>
          <p>{errors.email?.message}</p>

          <label htmlFor="">
            Número de telefone
            <Input
              type="text"
              id="phoneNumber"
              placeholder="Digite o Número de telefone"
              {...register("phoneNumber")}
            />
          </label>
          <p>{errors.phoneNumber?.message}</p>


          <PrimaryButton>Cadastrar Contato</PrimaryButton>
        </Form>
      </DivModal>
    </BgModal>
  );
}


export function DeleteClientModal() {
  const { deleteUserRequest } = useClientContext();
  const { closeModal } = useClientContext();
  const {token, userId} = parseCookies()

  const deleteUser = async ():Promise<void>=>{
    await deleteUserRequest(token, userId)
    closeModal()
  }


  return (
    <BgModal>
      <DivModal>
        <TitleModal>
          <p>Excluir perfil</p>
          <span onClick={closeModal}>X</span>
        </TitleModal>
        <DeleteModal>
          <h2>Tem certeza que deseja excluir seu perfil</h2>
          <PrimaryButton onClick={()=>closeModal()}>Fechar</PrimaryButton>
          <DeleteButton onClick={deleteUser}>Deletar Perfil</DeleteButton>
        </DeleteModal>
      </DivModal>
    </BgModal>
  );
}

export function DeleteContactModal({contactId}: any) {
  const { closeDeleteModal, contactDelete } = useContactContext();
  const {token} = parseCookies()

  const deleteUser = async ():Promise<void>=>{
    await contactDelete(contactId, token)
    closeDeleteModal()
  }


  return (
    <BgModal>
      <DivDeleteClientModal>
        <TitleModal>
          <p>Excluir contato</p>
          <span onClick={closeDeleteModal}>X</span>
        </TitleModal>
        <DivDeleteContactModal>
          <p>Tem certeza que deseja excluir esse contato?</p>
          <DeleteButton onClick={deleteUser}>Deletar Perfil</DeleteButton>
        </DivDeleteContactModal>
      </DivDeleteClientModal>
    </BgModal>
  );
}


interface IDataUpdate {
  fullName?: string;
  email?: string;
  phoneNumber?:string
}


export function UpdateContactModal({contactId}: any) {
  const { closeUpdateModal, contactUpdate } = useContactContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataUpdate>({
    resolver: yupResolver(updateRegister),
  });

  const onSubmit = async (data: IDataUpdate) => {
    const validatedData = pickBy(data, value=>value!.length>0)
    const res = await contactUpdate(validatedData, contactId)
    if (res) {
      closeUpdateModal();
    }
  };

  return (
    <BgModal>
      <DivModal>
        <TitleModal>
          <p>Editar contato</p>
          <span onClick={closeUpdateModal}>X</span>
        </TitleModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Nome Completo
            <Input
              type="text"
              id="fullName"
              placeholder="Digite o nome completo"
              {...register("fullName")}
            />
          </label>
          <p>{errors.fullName?.message}</p>

          <label htmlFor="">
            Email
            <Input
              type="text"
              id="email"
              placeholder="Digite o Email"
              {...register("email")}
            />
          </label>
          <p>{errors.email?.message}</p>

          <label htmlFor="">
            Número de telefone
            <Input
              type="text"
              id="phoneNumber"
              placeholder="Digite o Número de telefone"
              {...register("phoneNumber")}
            />
          </label>
          <p>{errors.phoneNumber?.message}</p>


          <PrimaryButton>Editar Contato</PrimaryButton>
        </Form>
      </DivModal>
    </BgModal>
  );
}