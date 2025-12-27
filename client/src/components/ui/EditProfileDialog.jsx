import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Loader2, PenSquare, Upload } from 'lucide-react';
import { useAuth } from '../../../hooks';

const EditProfileDialog = () => {
  const { user, setUser, uploadPicture, updateUser } = useAuth();
  const uploadRef = useRef(null);
  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name,
    password: '',
    confirm_password: '',
  });

  const handleImageclick = () => {
    uploadRef.current.click();
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setLoading({ ...userData, [name]: value });
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    const { name, password, confirm_password } = userData;

    //Validation
    if (name.trim() === '') {
        setLoading(false);
        return toast.error("Name Can't be empty");
    } else if (password !== confirm_password) {
        setLoading(false);
        return toast.error("password don't match");
    }

    try {
      // first check if picture has been updated or not
      let pictureUrl = '';
      if (picture) {
        // upload picture and save the image url
        pictureUrl = await uploadPicture(picture);
      }

      const userDetails = {
        name: userData.name,
        password: userData.password,
        picture: pictureUrl,
      };

      const res = await updateUser(userDetails);
      if (res.success) {
        setUser(res.user);
        setLoading(false);
        return toast.success('Updated successfully!');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
      setLoading(false);
    }
};

return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-600">
          <PenSquare className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <div className="flex justify-center">
          <div className="relative h-40 w-40 cursor-pointer overflow-hidden rounded-full">
            <div 
                className="absolute flex h-full w-full items-center justify-center" 
                onClick={handleImageClick}
                >
                <input 
                  type="file" 
                  className="hidden" 
                  ref={uploadRef} 
                  onChange={handlePictureChange} 
                />
              <Upload height={50} width={50} color="#4e4646" />
            </div>
            <Avatar className="h-full w-full">
              <AvatarImage 
                src={picture ? URL.createObjectURL(picture) : user.picture} 
                className="object-cover"
              />
            </Avatar>
          </div>
        </div>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={userData.name}
              onChange={handleUserData}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleUserData}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={userData.confirm_password}
              onChange={handleUserData}
            />
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-blue-600" 
            onClick={handleSaveChanges} 
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> 
                Updating...
              </div>
            ) : (
              'Save Changes'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;