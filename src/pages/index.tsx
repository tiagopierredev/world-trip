import { Box, Divider, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Header, } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Box as="section" backgroundImage="/background.png">
        <Flex justify="space-between" px='36' align='center'>
          <Box pt="20" pb="16">
            <Text as="h1" fontSize='4xl' fontWeight="medium" color="white" lineHeight="54px" >
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text fontSize='xl' color="info.light" mt="5" lineHeight="30px">
              Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
            </Text>
          </Box>

          <Image src="/airplane.svg" mb="-32" />

        </Flex>

      </Box>
      <Grid
        as="section"
        templateColumns='repeat(5, 1fr)'
        gap={4}
        mt="28"
        px="36">
        <TravelTypes name="vida noturna" url_image="/cocktail.svg" />
        <TravelTypes name="praia" url_image="/group.svg" />
        <TravelTypes name="moderno" url_image="/modern.svg" />
        <TravelTypes name="clássico" url_image="/museum.svg" />
        <TravelTypes name="e mais..." url_image="/earth.svg" />
      </Grid>
      <Flex justify="center" align="center">

        <Divider mt="20" w="90px" />
      </Flex>
      <Box as="section" px='36'>
        <Text as="h2" fontSize='4xl' fontWeight="medium" textAlign="center" mt="52px">
          Vamos nessa?<br />
          Então escolha seu continente
        </Text>
        <Carousel />
      </Box>
    </>
  )
}


