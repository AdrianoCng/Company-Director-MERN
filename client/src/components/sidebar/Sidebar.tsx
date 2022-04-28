import { Dispatch, SetStateAction } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";

// Styles
import * as S from "./styles";

// Components
import { Checkbox } from "../checkbox";

// Misc
import { routes } from "../../constants";
import useLocationsQuery from "../../hooks/shared/useLocationsQuery";
import useDepartmentsQuery from "../../hooks/shared/useDepartmentsQuery";

interface Props {
    isCollapsed: boolean;
    toogle?: Dispatch<SetStateAction<boolean>>;
    onChange?: (name: string, value: string) => void;
}
const Sidebar = ({ isCollapsed, toogle, onChange }: Props): JSX.Element => {
    const { pathname } = useLocation();
    const locations = useLocationsQuery();
    const departments = useDepartmentsQuery();

    const renderHeader = () => {
        if (matchPath(pathname, routes.homepage)) {
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
        } else {
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
        if (!matchPath(pathname, routes.homepage)) {
            return null;
        }

        return (
            <S.Content>
                <S.SectionGroup as={"div"}>
                    <S.SectionGroupHeader>
                        <GoLocation opacity={0.6} /> Locations
                    </S.SectionGroupHeader>

                    <S.SectionGroupContent>
                        {locations.data?.data.map(({ name, _id }) => (
                            <Checkbox name={"location"} id={_id} key={_id} value={name} onChange={onChange} />
                        ))}
                    </S.SectionGroupContent>
                </S.SectionGroup>

                <S.SectionGroup as={"div"}>
                    <S.SectionGroupHeader>
                        <MdOutlineLocationCity opacity={0.6} /> Departments
                    </S.SectionGroupHeader>

                    <S.SectionGroupContent>
                        {departments.data?.map(({ name, _id }) => (
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
