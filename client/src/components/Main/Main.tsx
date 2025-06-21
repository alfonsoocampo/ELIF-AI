import React from 'react'
import { useForm } from "react-hook-form"
import { Flex, Input, Field, Button, Stack, } from "@chakra-ui/react"
import { getTestEndpoint } from '../../services/restApi.tsx'

interface FormValues {
   topic: string;
}   
function Main() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit = handleSubmit(async (data) => {
        console.log("Submitted data:", data);
        console.log("Calling API...");
        try {
            const response = await getTestEndpoint();
            console.log("API Response:", response);
        } catch (error) {
            console.error("Error calling API:", error);
        }
    })

  return (

    <Flex direction="column" width="100%" gap="5" w="100%">
        
        <div><b>Explain Like I'm Five</b> - ELIF AI</div>
        
        <form onSubmit={onSubmit} >
            <Stack w="100%">
                <Field.Root invalid={!!errors.topic} w="100%">
                    <Field.Label>What do you want to learn about?</Field.Label>
                        {/* <Input placeholder="What do you want to learn about?" variant="flushed"/> */}

                        <Input
                        w="100%"
                        placeholder="Choose a topic to talk about..." 
                        variant="flushed"
                        {...register('topic', { required: true})}
                        />
                        <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>
                
                <Button type="submit" bg="black" size="md"> Submit </Button>
            </Stack>
        </form>
    
    </Flex>
  )
}

export default Main