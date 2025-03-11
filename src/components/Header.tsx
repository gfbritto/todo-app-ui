import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from '../assets/logo.svg'

import {
  Box,
  Button,
  Flex,
  Img,
  Select,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => i18n.changeLanguage(lng);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box display="flex" alignItems="center">
              <Img src={Logo} alt="Todo app logo" width="9" height="9" />
              <Box ml={2}>Todo App</Box>
            </Box>
          <Flex>
            <Stack direction={"row"} spacing={7} alignItems={"center"}>
              <Select
                size="sm"
                onChange={(e) => changeLanguage(e.target.value)}
                icon={<IoLanguage />}
                value={i18n.language}
              >
                <option value="pt-BR">Português Brasil</option>
                <option value="en-US">English</option>
              </Select>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
