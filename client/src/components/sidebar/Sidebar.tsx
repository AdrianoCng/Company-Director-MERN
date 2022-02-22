import React from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Checkbox } from "../checkbox";
import { LocationResponseData } from "../../types/Location";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
    locations: LocationResponseData | undefined;
}

const Sidebar = ({ isCollapsed, toogle, locations }: Props): JSX.Element => {
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
                        <GoLocation opacity={0.6} /> Locations
                    </S.SectionGroupHeader>

                    <S.SectionGroupContent>
                        {locations?.data.map(({ name, _id }) => (
                            <Checkbox name={name} id={_id} key={_id} />
                        ))}
                    </S.SectionGroupContent>
                </S.SectionGroup>

                <S.SectionGroup>
                    <S.SectionGroupHeader>
                        <MdOutlineLocationCity opacity={0.6} /> Departments
                    </S.SectionGroupHeader>
                </S.SectionGroup>
            </S.Content>
        </S.Wrapper>
    );
};

export default Sidebar;
