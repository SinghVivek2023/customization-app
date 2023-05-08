import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function ClientCustomizationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const isUsernameError = username === "";
  const isPasswordError = password === "";

  return (
    <>
      <section>
        <h1>Client Customization Form</h1>
      </section>
      <Box maxW="500px" mx="auto" color="#6dd5ed" m={4}>
        <FormControl isRequired>
          <FormLabel>Channel Partner</FormLabel>
          <Select placeholder="Choose" name="channel partner">
            <option>Schoollog</option>
            <option>Robo</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>App Type</FormLabel>
          <Select placeholder="Choose" name="app type">
            <option>Parent App</option>
            <option>Student App</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>School Name</FormLabel>
          <Input type="Text" maxLength={30} name="school name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Real School ID</FormLabel>
          <Input type="Text" maxLength={30} name="real school id" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Encoded School ID</FormLabel>
          <Input type="Text" maxLength={30} name="encoded school id" />
        </FormControl>
        <FormControl isRequired isInvalid={isUsernameError}>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
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
            name="password"
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
          <FormLabel>Logo</FormLabel>
          <label for="images" class="drop-container">
            <span class="drop-title">Drop files here</span>
            or
            <input
              type="file"
              id="images"
              accept="image/*"
              required
              name="logo"
            />
          </label>
        </FormControl>
        <FormControl>
          <FormLabel>Remarks</FormLabel>
          <Textarea
            placeholder="Add organization (if any) details or any other remarks"
            name="remarks"
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Box>
    </>
  );
}
