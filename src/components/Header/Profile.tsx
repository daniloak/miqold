import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Danilo Kasparian</Text>
          <Text color="gray.300" fontSize="small">
            dkasparian@omnya.services
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Danilo Kasparian"></Avatar>
    </Flex>
  );
}
