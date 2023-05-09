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
  Divider,
} from "@chakra-ui/react";
import { db } from "../firebase";

export default function ClientCustomizationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const isUsernameError = username === "";
  const isPasswordError = password === "";
  const [channelPartner, setChannelPartner] = useState("");
  const [appType, setAppType] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [realSchoolId, setRealSchoolId] = useState("");
  const [encodedSchoolId, setEncodedSchoolId] = useState("");
  const [logo, setLogo] = useState("");
  const [remarks, setRemarks] = useState("");
  const handleChannelPartnerChange = (e) => setChannelPartner(e.target.value);
  const handleAppTypeChange = (e) => setAppType(e.target.value);
  const handleSchoolNameChange = (e) => setSchoolName(e.target.value);
  const handleRealSchoolIdChange = (e) => setRealSchoolId(e.target.value);
  const handleEncodedSchoolIdChange = (e) => setEncodedSchoolId(e.target.value);
  const handleLogoChange = (e) => setLogo(e.target.value);
  const handleRemarksChange = (e) => setRemarks(e.target.value);
  const isChannelPartnerError = channelPartner === "";
  const isAppTypeError = appType === "";
  const isSchoolNameError = schoolName === "";
  const isRealSchoolIdError = realSchoolId === "";
  const isEncodedSchoolIdError = encodedSchoolId === "";
  const isLogoError = logo === "";
  const isRemarksError = remarks === "";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isUsernameError ||
      isPasswordError ||
      isChannelPartnerError ||
      isAppTypeError ||
      isSchoolNameError ||
      isRealSchoolIdError ||
      isEncodedSchoolIdError ||
      isLogoError ||
      isRemarksError
    ) {
      return;
    }
    db.collection("client-customization-form")
      .add({
        username: username,
        password: password,
        channelPartner: channelPartner,
        appType: appType,
        schoolName: schoolName,
        realSchoolId: realSchoolId,
        encodedSchoolId: encodedSchoolId,
        logo: logo,
        remarks: remarks,
      })
      .then(() => {
        alert("Your response has been submitted successfully.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setUsername("");
    setPassword("");
    setChannelPartner("");
    setAppType("");
    setSchoolName("");
    setRealSchoolId("");
    setEncodedSchoolId("");
    setLogo("");
    setRemarks("");
  };

  return (
    <>
      <Box
        maxW="500px"
        mx="auto"
        color="blue"
        m={4}
        bg="white"
        boxShadow="lg"
        rounded="md"
        p={6}
      >
        <section>
          <h1>Customize your App</h1>
          <Divider />
          <p>
            Make your app unique by adding your school logo and other details.
          </p>
          <Divider />
        </section>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Channel Partner</FormLabel>
            <Select
              placeholder="Choose"
              name="channel partner"
              value={channelPartner}
              onChange={handleChannelPartnerChange}
            >
              <option>Schoollog</option>
              <option>Robo</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>App Type</FormLabel>
            <Select
              placeholder="Choose"
              name="app type"
              value={appType}
              onChange={handleAppTypeChange}
            >
              <option>Parent App</option>
              <option>Student App</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>School Name</FormLabel>
            <Input
              type="Text"
              maxLength={30}
              name="school name"
              value={schoolName}
              onChange={handleSchoolNameChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Real School ID</FormLabel>
            <Input
              type="Text"
              maxLength={30}
              name="real school id"
              value={realSchoolId}
              onChange={handleRealSchoolIdChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Encoded School ID</FormLabel>
            <Input
              type="Text"
              maxLength={30}
              name="encoded school id"
              value={encodedSchoolId}
              onChange={handleEncodedSchoolIdChange}
            />
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
                value={logo}
                onChange={handleLogoChange}
              />
            </label>
          </FormControl>
          <FormControl>
            <FormLabel>Remarks</FormLabel>
            <Textarea
              placeholder="Add organization (if any) details or any other remarks"
              name="remarks"
              value={remarks}
              onChange={handleRemarksChange}
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </>
  );
}
