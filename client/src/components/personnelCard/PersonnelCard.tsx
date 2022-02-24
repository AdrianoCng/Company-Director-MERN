import React from "react";
import * as S from "./styles";
import avatar from "../../avatar.jpg";

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

                <div className="card-footer">
                    <button className="card-button">T</button>
                    <button className="card-button">G</button>
                    <button className="card-button">F</button>
                </div>
            </S.Body>
        </S.Card>
    );
};

export default PersonnelCard;
