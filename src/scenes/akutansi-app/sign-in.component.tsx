import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../features/state-engine/redux-hooks';
import { ChangeEvent, ReactElement, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { ICredential } from '../../features/entities/credential';
import { fetchToken } from '../../services/redux-token-slice.service';
import { CredentialSchema } from '../../features/schema-resolver/zod-schema';
import { Button, Field, Input, InputOnChangeData } from '@fluentui/react-components';
import { Navigate } from 'react-router-dom';

const SignInScreen = (): ReactElement => {
  const token = useAppSelector(state => state.persisted.token); 
  const dispatch = useAppDispatch();
  const { handleSubmit, control} = useForm<ICredential>(
    {
      resolver: zodResolver(CredentialSchema)
    }
  );
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disableForm, setDisableForm] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ICredential> = (data): void => {
    setDisableForm(true);
    dispatch(fetchToken(data)).then((_dataHasil) => {
      console.log(_dataHasil);
      setDisableForm(false);
    }).catch(() => {
      setDisableForm(false);
    });      
  };
  
  return token == null ? (
      <>
        <Controller
          name="userName"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => 
            <Field
              label='User name'
              validationMessage={error && error.type == 'invalid_type'? 'harus diisi':error?.message}
            >
              <Input              
                placeholder='isikan user name'
                value={userName}
                disabled={disableForm}
                onChange={(_ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
                    field.onChange(data.value || null);
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
          render={({ field, fieldState: { error } }) => 
            <Field
              label='Password'
              validationMessage={error && error.type == 'invalid_type'? 'harus diisi':error?.message}
            >
              <Input              
                placeholder='isikan password'
                value={password}
                disabled={disableForm}
                type='password'
                onChange={(_ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
                    field.onChange(data.value || null);
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
            onClick={handleSubmit(onSubmit)}>
            SIGN IN
        </Button>
      </>
      ) : <Navigate to="/" replace={true} />;
};

export default SignInScreen;