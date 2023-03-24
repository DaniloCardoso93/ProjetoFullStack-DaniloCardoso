import User from "../../entities/user.entities";
import Contact from "../../entities/contact.entities";

declare global{
    namespace Express{
        interface Request{
            users: object;
            user: {id: string};
        }
    }
}
