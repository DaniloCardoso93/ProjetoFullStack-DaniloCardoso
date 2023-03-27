import { HeaderLogged } from "@/components/Header";
import { DeleteContactModal, RegisterContactModal } from "@/components/Modal";
import api from "@/services/api";
import { GetServerSideProps } from "next";
import nookies from "nookies"
import { useEffect, useState } from "react"
import { useContactContext } from "@/contexts/contact";
import { useClientContext } from "@/contexts/user";
import { BodyDashbord, Div, NoContacts, PerfilDiv, UlDashBord } from "../../pages/dashboard/style";
import { BsPlusSquareFill, BsTrash } from "react-icons/bs";




interface IId{
    id:string;
    token:string
}

function Dashboard({id, token}:IId){
    const { user, isModalVisible, openModal, PerfilRequest, setLoading } = useClientContext();
    const { setContact, contact, openDeleteModal, isDeleteModalVisible } = useContactContext();
    const [isForModal, setIsForModal] = useState<string>()

    useEffect(() => {
        async function profile() {    
          if (token) {
            await PerfilRequest(token, id)
          }
          setContact(false);
          setLoading(false);
        }
    
        profile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [contact]);



    return(
        <>
        <HeaderLogged></HeaderLogged>  

        <Div>
            {isModalVisible ? <RegisterContactModal /> : null}
            {isDeleteModalVisible ? <DeleteContactModal contactId={isForModal}/> : null}

            <PerfilDiv>           
                <h1>Olá, {user?.fullName}</h1>
            </PerfilDiv>
            <BodyDashbord>
            <p>Contatos</p>
            <BsPlusSquareFill onClick={openModal} />
            </BodyDashbord>
            {user?.contacts.length ? (
            <UlDashBord>
                {user.contacts.map((contact) => (
                <li key={contact.id} id={contact.id}>
                    <p>{contact.fullName}</p>
                    <div>
                        <span>{contact.email}</span>
                        <span>{contact.phoneNumber}</span>
                        <BsTrash id={contact.id} onClick={()=>{
                            setIsForModal(contact.id)
                            openDeleteModal()
                        }}/>
                    </div>
                </li>
                ))}
            </UlDashBord>
            ) : (
            <NoContacts>Sem contato cadastradas</NoContacts>
            )}
        </Div>     
        </>
    )
}



export const getServerSideProps:GetServerSideProps = async(ctx)=>{
    const cookies = nookies.get(ctx)

    if(cookies.token){
        try {
            api.defaults.headers.authorization = `Bearer ${cookies.token}`;
            const { data } = await api.get(`/users/${cookies.userId}`)

        } catch (error) {
            // console.log(error.response.data.message)
            return {
                redirect:{
                    destination:"/",
                    permanent:false
                }
            }
        }
    }
    
    if(!cookies['token']){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    
    return {
        props:{
            id:cookies['userId'],
            token:cookies['token']
        }
    }
}



export default Dashboard