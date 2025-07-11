# MODELLING FOR HOSPITAL-MANAGEMENT

# doctor model

```javascript
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = new mongoose.model("Doctor", doctorSchema);
```

# hospital model

```javascript
import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specialisedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = new mongoose.model("Hospital", hospitalSchema);
```

# patient model

```javascript
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      tyoe: String,
      required: true,
    },
    age: {
      tyoe: Number,
      required: true,
    },
    bloodGroup: {
      tyoe: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = new mongoose.model("Patient", patientSchema);
```

# medical-record model

```javascript
import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    //similarly this one tooo
  },
  { timestamps: true }
);

export const MedicalRecord = new mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
```
