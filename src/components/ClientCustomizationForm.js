import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Select,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

const ClientCustomizationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const isUsernameError = username === "";
  const isPasswordError = password === "";
  return (
    <>
      <Divider orientation="horizontal" h="2px" />
      <section>
        <h1>Client Customization Form</h1>
      </section>
      <Box maxW="500px" mx="auto" color="#6dd5ed">
        <FormControl isRequired>
          <FormLabel>Channel Partner</FormLabel>
          <Select placeholder="Choose">
            <option>Schoollog</option>
            <option>Robo</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>App Type</FormLabel>
          <Select placeholder="Choose">
            <option>Parent App</option>
            <option>Student App</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>School Name</FormLabel>
          <Input type="Text" max={30} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Real School ID</FormLabel>
          <Input type="Text" max={30} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Encoded School ID</FormLabel>
          <Input type="Text" max={30} />
        </FormControl>
        <FormControl isRequired isInvalid={isUsernameError}>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Username"
            max={30}
            value={username}
            onChange={handleUsernameChange}
          />
          {!isUsernameError ? (
            <FormHelperText>Enter your username🙂.</FormHelperText>
          ) : (
            <FormErrorMessage>Username is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={isPasswordError}>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            max={30}
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPasswordError ? (
            <FormHelperText>Enter your Password🙂.</FormHelperText>
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Remarks</FormLabel>
          <Textarea
            placeholder="Add organization(if any) details or any other remarks"
            name="remarks"
          />
        </FormControl>
      </Box>
    </>
  );
};

export default ClientCustomizationForm;
