import { Flex, Image, Link as LinkChakra, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from "next/link";

interface HeaderProps {
  url?: string
}

export function Header({ url = "" }: HeaderProps) {
  return (
    <Flex as="header" bg="white" align="center" justify="center" py="7" px="36" >
      <Flex align="center" justify="center" w="100%">
        {!!url && (
          <Link href={url}>
            <LinkChakra flexGrow="1" >
              <Flex>
                <ChevronLeftIcon w={8} h={8} />
              </Flex>
            </LinkChakra>
          </Link>)}
        <Flex flexGrow="1" justify={!url ? 'center' : ''} >
          <Image src="/surf.svg" />
        </Flex>
      </Flex>
    </Flex>
  )
}