import { Box, Text, Button, useToast, useColorModeValue } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const Task = ({ id, title, descripcion, realizado, borrarTarea, iniciarEdicion, toggleComplete }) => {
  const toast = useToast();
  const bgColor = useColorModeValue(realizado ? 'teal.100' : 'gray.100', realizado ? 'teal.700' : 'gray.700');
  const color = useColorModeValue('gray.800', 'white');

  const handleDelete = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres borrar esta tarea?');
    if (confirmDelete) {
      borrarTarea(id);
      toast({
        title: "Tarea eliminada",
        description: "La tarea ha sido eliminada correctamente.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleToggleComplete = () => {
    toggleComplete(id);
  };

  return (
    <Box
      borderWidth="1px"
      display="flex"
      alignItems="center"
      gap="10px"
      p="10px"
      mb="10px"
      justifyContent="space-between"
      bgColor={bgColor}
      color={color}
    >
      <Text fontWeight="bold">{title}</Text>
      <Text>{descripcion}</Text>
      <Text fontWeight="bold" color={realizado ? 'green.500' : 'red.500'}>
        {realizado ? 'Completado' : 'Pendiente'}
      </Text>
      <Button onClick={handleDelete} colorScheme="red" title="Borrar tarea">
        <DeleteIcon />
      </Button>
      <Button onClick={() => iniciarEdicion({ id, title, descripcion, realizado })} colorScheme="yellow" title="Editar tarea">
        <EditIcon />
      </Button>
      <Button onClick={handleToggleComplete} colorScheme={realizado ? 'gray' : 'green'} title={realizado ? 'Marcar como Pendiente' : 'Marcar como Completado'}>
        {realizado ? <CloseIcon /> : <CheckIcon />}
      </Button>
    </Box>
  );
};

export default Task;




