import { Dispatch, SetStateAction } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { Checkbox } from "../checkbox";
import { LocationResponseData } from "../../types/Location";
import { DepartmentResponseObject } from "../../types/Department";
import { routes } from "../../utils/constants";

interface Props {
    isCollapsed: boolean;
    toogle?: Dispatch<SetStateAction<boolean>>;
    locations?: LocationResponseData | undefined;
    departments?: DepartmentResponseObject[] | undefined;
    onChange?: (name: string, value: string) => void;
}

const Sidebar = ({
    isCollapsed,
    toogle,
    locations,
    departments,
    onChange,
}: Props): JSX.Element => {
    const location = useLocation();

    const renderHeader = () => {
        if (matchPath(location.pathname, routes.homepage)) {
            return (
                <>
                    <S.Button
                        onClick={() => {
                            if (toogle) {
                                toogle((prev) => !prev);
                            }
                        }}
                    >
                        <GiHamburgerMenu />
                    </S.Button>

                    <Link to={routes.addPersonnel}>
                        <S.Button>
                            <FaUserPlus />
                        </S.Button>
                    </Link>
                </>
            );
        }

        if (matchPath(location.pathname, routes.addPersonnel)) {
            return (
                <Link to={routes.homepage}>
                    <S.Button>
                        <TiArrowBack />
                    </S.Button>
                </Link>
            );
        }
    };

    const renderContent = () => {
        if (!matchPath(location.pathname, routes.homepage)) {
            return null;
        }

        return (
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
                                onChange={onChange}
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
                                onChange={onChange}
                            />
                        ))}
                    </S.SectionGroupContent>
                </S.SectionGroup>
            </S.Content>
        );
    };

    return (
        <S.Wrapper $isCollapsed={isCollapsed}>
            <S.Header>{renderHeader()}</S.Header>

            {renderContent()}
        </S.Wrapper>
    );
};

export default Sidebar;
