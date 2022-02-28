import React from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Checkbox } from "../checkbox";
import { LocationResponseData } from "../../types/Location";
import { DepartmentResponseObject } from "../../types/Department";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
    locations: LocationResponseData | undefined;
    departments: DepartmentResponseObject[] | undefined;
}

const Sidebar = ({
    isCollapsed,
    toogle,
    locations,
    departments,
}: Props): JSX.Element => {
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
                <S.SectionGroup as={"div"}>
                    <S.SectionGroupHeader>
                        <GoLocation opacity={0.6} /> Locations
                    </S.SectionGroupHeader>

                    <S.SectionGroupContent>
                        {locations?.data.map(({ name, _id }) => (
                            <Checkbox
                                name={"location"}
                                id={_id}
                                key={_id}
                                value={name}
                                onChange={(name, value) => {}}
                            />
                        ))}
                    </S.SectionGroupContent>
                </S.SectionGroup>

                <S.SectionGroup as={"div"}>
                    <S.SectionGroupHeader>
                        <MdOutlineLocationCity opacity={0.6} /> Departments
                    </S.SectionGroupHeader>

                    <S.SectionGroupContent>
                        {departments?.map(({ name, _id }) => (
                            <Checkbox
                                name={"department"}
                                id={_id}
                                key={_id}
                                value={name}
                                onChange={(name, checked) => {}}
                            />
                        ))}
                    </S.SectionGroupContent>
                </S.SectionGroup>
            </S.Content>
        </S.Wrapper>
    );
};

export default Sidebar;
