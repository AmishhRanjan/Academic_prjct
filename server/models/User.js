import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true , unique: true }, //we shouldn't have two user with the same account so it should be unique.
        password: { type: String },
        active: { type: Boolean, default: false },
        isAdmin: { type: Boolean, default: false },
        firstLogin: { type: Boolean, default: true },
        googleImage: { type: String, default: undefined },
        googleId: { type: String, default: undefined },
    },
    {timestamps: true}
);

userSchema.methods.matchPasswords = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {           // To look if password is modified somewhere.If so, then skip this part.
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);         //Othewise save the password, but before we saving it, we hashing it.
});

const User = mongoose.model('User', userSchema);
export default User;