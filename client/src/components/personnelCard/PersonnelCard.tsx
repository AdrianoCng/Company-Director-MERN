import { Link } from "react-router-dom";
import {
    AiFillFacebook,
    AiFillGoogleSquare,
    AiFillTwitterSquare,
} from "react-icons/ai";

import * as S from "./styles";
import avatar from "../../assets/avatar.jpg";
import { routes } from "../../utils/constants";

interface Props {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    location: string;
    id: string;
}

const PersonnelCard = ({
    firstName,
    lastName,
    email,
    department,
    location,
    id,
}: Props) => {
    return (
        <S.Card>
            <S.Background />

            <S.Avatar>
                <img src={avatar} alt="Avatar" />
            </S.Avatar>

            <S.Body>
                <h3>
                    <Link
                        to={`${routes.editPersonnel}/${id}`}
                    >{`${firstName} ${lastName}`}</Link>
                </h3>
                <span>{department}</span>
                <span>{location}</span>
                <div>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>

                <S.Footer>
                    <button type="button">
                        <AiFillFacebook color="#4267B2" />
                    </button>
                    <button type="button">
                        <AiFillGoogleSquare color="#DB4437" />
                    </button>
                    <button type="button">
                        <AiFillTwitterSquare color="#1DA1F2" />
                    </button>
                </S.Footer>
            </S.Body>
        </S.Card>
    );
};

export default PersonnelCard;
