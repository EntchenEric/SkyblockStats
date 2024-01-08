import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getUUIDFromName } from '../../api/getUUIDFromName';

export function SearchBar() {
  const form = useForm({
    initialValues: {
      playername: '',
    },
    validate: {
      playername: (value) =>
        value.length <= 1
          ? 'Playername has to be longer'
          : value.length >= 32
            ? 'Playername has to be shorter'
            : getUUIDFromName(value) === null
              ? "Playername doesn't exist"
              : null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput placeholder="Enter Playername" {...form.getInputProps('playername')} />
    </form>
  );
}
