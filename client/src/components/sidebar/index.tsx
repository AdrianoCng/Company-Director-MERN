import React from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isCollapsed, toogle }: Props): JSX.Element => {
    return (
        <S.Wrapper $isCollapsed={isCollapsed}>
            <S.Hamburger onClick={() => toogle((prev) => !prev)}>
                <GiHamburgerMenu />
            </S.Hamburger>

            <S.Content>
                <S.SectionGroup>
                    <S.SectionGroupIcon>
                        <GoLocation /> Locations
                    </S.SectionGroupIcon>

                    <S.SectionGroupContent>Checkbox here</S.SectionGroupContent>
                </S.SectionGroup>

                <MdOutlineLocationCity />
            </S.Content>
        </S.Wrapper>
    );
};

export default Sidebar;
