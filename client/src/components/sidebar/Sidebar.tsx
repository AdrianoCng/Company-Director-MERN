import React from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isCollapsed, toogle }: Props): JSX.Element => {
    return (
        <S.Wrapper $isCollapsed={isCollapsed}>
            <S.Header>
                <S.Button onClick={() => toogle((prev) => !prev)}>
                    <GiHamburgerMenu />
                </S.Button>

                <S.Button>
                    <FaUserPlus />
                </S.Button>
            </S.Header>

            <S.Content>
                <S.SectionGroup>
                    <S.SectionGroupHeader>
                        <GoLocation /> Locations
                    </S.SectionGroupHeader>

                    <S.SectionGroupContent>Checkbox here</S.SectionGroupContent>
                </S.SectionGroup>

                <MdOutlineLocationCity />
            </S.Content>
        </S.Wrapper>
    );
};

export default Sidebar;
