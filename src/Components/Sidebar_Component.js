import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { BsFillBagCheckFill, BsFillBagPlusFill } from "react-icons/bs";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { MdHistory, MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router";
import { useState } from "react";

const SidebarHeader = (props) => {
  return (
    <Box w={"100%"} mt={3} pl={3} pr={3} pt={3}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex justifyContent={"center"} columnGap={2} alignItems={"center"}>
          <Box w={10}>
            <Image src={require("./../assets/logo/zcmc_logo.png")} />
          </Box>
          {!props.collapsed ? (
            <Text fontSize={"1rem"} fontWeight={600}>
              PR | PO ISSUANCE
            </Text>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
};

const MenuItemComponent = (props) => {
  return (
    <MenuItem icon={props.child} _hover={{ bgColor: "teal.200" }}>
      <Text
        width="full"
        fontWeight={600}
        onClick={(e) => props.click(e, props.path)}
      >
        {props.title}
      </Text>
    </MenuItem>
  );
};

const SidebarNavigation = (props) => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#fff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        hover: {
          backgroundColor: "#e6f2fd",
          color: "#44596e",
        },
        active: {
          backgroundColor: "#13395e",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7",
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#0e3052",
          color: "#b6c8d9",
        },
        active: {
          backgroundColor: "#13395e",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: {
      backgroundColor: themes[theme].menu.menuContent,
    },
    button: {
      [`&.${menuClasses.active}`]: {
        backgroundColor: themes[theme].menu.active.backgroundColor,
        color: themes[theme].menu.active.color,
      },
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: themes[theme].menu.hover.backgroundColor,
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <Box>
      <Sidebar breakPoint="lg" backgroundColor="white">
        <SidebarHeader collapsed={props.collapsed} />
        <Box h={20}></Box>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItemComponent
            title={"Dashboard"}
            path={"/"}
            child={<MdSpaceDashboard color="teal" fontSize={25} />}
            click={handleClick}
          />
          <MenuItemComponent
            title={"Purchase Request"}
            path={"pr"}
            child={<BsFillBagPlusFill color="teal" fontSize={25} />}
            click={handleClick}
          />
          <MenuItemComponent
            title={"Purchase Order"}
            path={"po"}
            child={<BsFillBagCheckFill color="teal" fontSize={25} />}
            click={handleClick}
          />
          <MenuItemComponent
            title={"Users"}
            path={"users"}
            child={<FaUsers color="teal" fontSize={25} />}
            click={handleClick}
          />
          <MenuItemComponent
            title={"Departments"}
            path={"departments"}
            child={<FaBuilding color="teal" fontSize={25} />}
            click={handleClick}
          />
          <MenuItemComponent
            title={"Request Logs"}
            path={"logs"}
            child={<MdHistory color="teal" fontSize={25} />}
            click={handleClick}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarNavigation;