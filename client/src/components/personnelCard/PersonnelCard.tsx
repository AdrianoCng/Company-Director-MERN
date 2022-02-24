import React from "react";
import * as S from "./styles";
import avatar from "../../avatar.jpg";
import {
    AiFillFacebook,
    AiFillGoogleSquare,
    AiFillTwitterSquare,
} from "react-icons/ai";

const PersonnelCard = () => {
    return (
        <S.Card>
            <S.Background />

            <S.Avatar>
                <img src={avatar} alt="Avatar" />
            </S.Avatar>

            <S.Body>
                <h3>
                    <a href="#">firstName LastName</a>
                </h3>
                <span>Market</span>
                <span>London</span>
                <div>
                    <a href="">email@emai.com</a>
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
