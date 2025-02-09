import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { TRANSLATION_KEYS } from "../i18n/constants";

export default function Footer() {
  const { t } = useTranslation();
  const { FOOTER } = TRANSLATION_KEYS;
  return (
    <footer>
      <Box bottom="0" w="100%" p={3} textAlign={"center"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Text fontSize={"xs"}>
            {t(FOOTER.OWNER)} &copy; {new Date().getFullYear()}.
          </Text>

          <Link
            href="https://github.com/gfbritto"
            variant={"ghost"}
            isExternal
            fontSize={"xs"}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <FaGithub />
              <Text marginX={2}>{t(FOOTER.PORTFOLIO)}</Text>
              <LuExternalLink />
            </Flex>
          </Link>
        </Flex>
      </Box>
    </footer>
  );
}
