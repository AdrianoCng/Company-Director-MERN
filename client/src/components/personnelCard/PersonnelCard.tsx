import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGoogleSquare, AiFillTwitterSquare } from "react-icons/ai";

// Styles
import * as S from "./styles";

// Misc
import avatar from "../../assets/blankAvatar.jpeg";
import { routes } from "../../constants";

interface Props {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    location: string;
    id: string;
    avatarUrl: string | null;
}
const PersonnelCard = ({ firstName, lastName, email, department, location, id, avatarUrl }: Props) => {
    return (
        <S.Card>
            <S.AvatarContainer>
                <Link to={`${routes.editPersonnel}/${id}`}>
                    <S.Avatar $src={avatarUrl || avatar} />
                </Link>
            </S.AvatarContainer>

            <S.Body>
                <h3>
                    <Link to={`${routes.editPersonnel}/${id}`}>{`${firstName} ${lastName}`}</Link>
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
