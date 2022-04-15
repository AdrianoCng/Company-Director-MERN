import * as S from "./styles";
import avatar from "../../assets/avatar.jpg";
import {
    AiFillFacebook,
    AiFillGoogleSquare,
    AiFillTwitterSquare,
} from "react-icons/ai";

interface Props {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    location: string;
}

const PersonnelCard = ({
    firstName,
    lastName,
    email,
    department,
    location,
}: Props) => {
    return (
        <S.Card>
            <S.Background />

            <S.Avatar>
                <img src={avatar} alt="Avatar" />
            </S.Avatar>

            <S.Body>
                <h3>
                    <a href="#">{`${firstName} ${lastName}`}</a>
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
