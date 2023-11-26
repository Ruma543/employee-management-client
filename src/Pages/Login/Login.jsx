import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = async data => {
    loginUser(data.email, data.password).then(result => {
      const user = result.user;
      console.log(user);
      reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user login successfully',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(location.state ? location.state : '/');
    });
    console.log(data);
  };
  return (
    <div className="w-4/5 mx-auto my-7 ">
      <p>
        New in our Website? please
        <Link to="/registration">register</Link>
      </p>
      <Card className="max-w-sm w-2/3 mx-auto">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              {...register('email', { required: true })}
              placeholder="enter your email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              {...register('password', { required: true })}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className="bg-green-300" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
