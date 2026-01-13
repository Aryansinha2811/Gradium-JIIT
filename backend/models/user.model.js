import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/* -------------------------------------------------------------------------- */
/*                              BASE USER SCHEMA                               */
/* -------------------------------------------------------------------------- */

const options = {
  discriminatorKey: 'role', // admin | user | company
  timestamps: true,
};

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
      trim: true,
    default: '',
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    phone: {
      type: String,
      required: function () {
        return this.role === 'user'; // optional for company/admin if you want
      },
    },

    dob: {
      type: Date,
      required: function () {
        return this.role === 'user';
      },
    },
  },
  options,
);

// Add this after the schema definition
userSchema.index({ email: 1, role: 1 }, { unique: true });

/* -------------------------------------------------------------------------- */
/*                           PASSWORD MIDDLEWARE                               */
/* -------------------------------------------------------------------------- */

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();

  if (update?.password) {
    update.password = await bcrypt.hash(update.password, 10);
  }

  next();
});

/* -------------------------------------------------------------------------- */
/*                             INSTANCE METHODS                                */
/* -------------------------------------------------------------------------- */

userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};

/* -------------------------------------------------------------------------- */
/*                                BASE MODEL                                   */
/* -------------------------------------------------------------------------- */

const User = mongoose.model('User', userSchema);

/* -------------------------------------------------------------------------- */
/*                                ADMIN MODEL                                  */
/* -------------------------------------------------------------------------- */

const adminSchema = new mongoose.Schema({
  permissions: {
    type: [String],
    default: ['ALL'],
  },
});

const Admin = User.discriminator('admin', adminSchema);

/* -------------------------------------------------------------------------- */
/*                              STUDENT (ROLE: user)                           */
/* -------------------------------------------------------------------------- */

const studentSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },

  batch: {
    type: String,
    required: true,
  },
});

const Student = User.discriminator('user', studentSchema);

/* -------------------------------------------------------------------------- */
/*                               COMPANY MODEL                                 */
/* -------------------------------------------------------------------------- */

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },

  website: {
    type: String,
  },

  industry: {
    type: String,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
});

const Company = User.discriminator('company', companySchema);

/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                   */
/* -------------------------------------------------------------------------- */

export { User, Admin, Student, Company };
