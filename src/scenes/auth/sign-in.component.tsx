import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/redux-hooks';
import { ChangeEvent, ReactElement, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { ICredential } from '../../features/entities/credential';
import { fetchToken } from '../../services/redux-token-slice.service';
import { CredentialSchema } from '../../features/schema-resolver/zod-schema';
import { Button, Field, Input, InputOnChangeData } from '@fluentui/react-components';

export const SignInScreen = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { handleSubmit, control} = useForm<ICredential>(
    {
      resolver: zodResolver(CredentialSchema)
    }
  );
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [disableForm, setDisableForm] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ICredential> = (data): void => {
    setDisableForm(true);
    dispatch(fetchToken(data)).then((_dataHasil) => {
      setDisableForm(false);
    }).catch(() => {
      setDisableForm(false);
    });      
  };

  const onError: SubmitErrorHandler<ICredential> = async (err) => {
    console.log('error', err);
};

  return (
    <>
      <Controller
        name="userName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => 
          <Field
            label='User name'
          >
            <Input              
              placeholder='isikan user name'
              value={userName}
              disabled={disableForm}
              onChange={(_ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
                  field.onChange(data.value || '');
                  setUserName(data.value || '');
                }
              }
            />
          </Field>          
        }
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => 
          <Field
            label='Password'
          >
            <Input              
              placeholder='isikan password'
              value={password}
              disabled={disableForm}
              onChange={(_ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
                  field.onChange(data.value || '');
                  setPassword(data.value || '');
                }
              }
            />
          </Field>          
        }
      />
      <Button
          size='large'
          disabled={disableForm}
          onClick={handleSubmit(onSubmit, onError)}>
          SIGN IN
      </Button>
    </>
  );

};