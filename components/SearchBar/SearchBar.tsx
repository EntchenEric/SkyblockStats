import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getUUIDFromName } from '../../api/getUUIDFromName';
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const router = useRouter();

  const handleRedirect = (name: string) => {
    router.push(`/${name}`);
  };
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
    <form onSubmit={form.onSubmit((values) => handleRedirect(values.playername))}>
      <TextInput placeholder="Enter Playername" {...form.getInputProps('playername')} />
    </form>
  );
}
