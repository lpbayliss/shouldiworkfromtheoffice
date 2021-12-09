import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { getExcuse } from "../utils/excuses";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [excuse, setExcuse] = useState<string>("");

  return (
    <div>
      <Head>
        <title>Should I Work From The Office?</title>
        <meta name="description" content="Working from home excuse generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        my="auto"
        h="100vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Container centerContent maxW="2xl" mb="12">
          <Heading size="md" textAlign="center" mb="4">
            Not sure if you can stomach the office?
          </Heading>
          <Heading size="3xl" textAlign="center" mb="6">
            What is your excuse to work from home today?*
          </Heading>
          <Text fontSize="xs" fontStyle="italic" textAlign="center">
            * We claim no responsibility for any loss of job, income, limb,
            friends, or respect from using any of the excuses found on this
            site. You use any and all excuses at your own risk.
          </Text>
          <Box
            w="full"
            text="white"
            bg="gray.700"
            rounded="lg"
            px="6"
            py="8"
            my="12"
            shadow="lg"
          >
            <Box hidden={isLoading || !excuse.length} pb="6">
              <Text fontSize="lg" mb="2">
                I can&apos;t come into the office today because...
              </Text>
              <Text
                fontSize="3xl"
                fontStyle="italic"
                fontWeight="semibold"
                textAlign="center"
              >
                &quot;{excuse}&quot;
              </Text>
            </Box>
            <Center hidden={!isLoading} my="8">
              <Spinner
                thickness="4px"
                speed="0.65s"
                color="gray.200"
                size="xl"
              />
            </Center>
            <Center>
              <Button
                disabled={isLoading}
                onClick={async () => {
                  setIsLoading(true);
                  await sleep(
                    Math.floor(Math.random() * (500 - 100 + 1) + 100)
                  );
                  setExcuse(getExcuse());
                  setIsLoading(false);
                }}
              >
                {!!excuse.length ? "Get another excuse" : "Get excuse"}
              </Button>
            </Center>
          </Box>
        </Container>
      </Flex>
    </div>
  );
};

export default Home;
