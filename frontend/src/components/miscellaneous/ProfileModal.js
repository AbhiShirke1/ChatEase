import { ViewIcon } from '@chakra-ui/icons';
import { Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {
                children ? <span onClick={onOpen}>{children}</span> : (<IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />)
            }

            <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize="40px" fontFamily="Work sans" display="flex" justifyContent="center">{user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody d="flex" flexDir="column" alignItems="center" justifyContent="space-between">
                        
                    </ModalBody>
                        <Image d="block" ml="auto" mr="auto" borderRadius="full" boxSize="150px" src={user.pic} alt={user.name}></Image>

                        <Text fontSize={{base: "28px", md: "30px"}} fontFamily="Work sans" d="block" ml="auto" mr="auto">Email: {user.email}</Text>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                       
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal
