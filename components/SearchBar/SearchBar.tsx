import { Input } from '@mantine/core';
import { useForm } from '@mantine/form';

export function SearchBar() {
  const form = useForm({
    initialValues: {
      playername: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Input placeholder="Enter Playername" {...form.getInputProps('playername')} />
    </form>
  );
}
