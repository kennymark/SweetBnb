import Layout from "../components/layout";
import SEO from "../components/seo";
import { Flex, Box } from "@chakra-ui/react";

function IndexPage() {
  return (
    <Layout>
      <SEO title='Home' />
      <Flex className="flex-col items-center justify-center">
        <Box as='img' src="team-of-critters.svg" maxW='full' alt="Four one-eyed aliens playing" />
      </Flex>
    </Layout>
  );
}

export default IndexPage;
