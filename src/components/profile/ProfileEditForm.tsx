"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import type { ProfileUser } from "@/data/profileUser";

export type { ProfileUser } from "@/data/profileUser";

type FormErrors = Partial<Record<keyof ProfileUser, string>>;

function EditSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-3 font-nav text-xs font-bold uppercase tracking-[0.2em] text-moon sm:text-sm">
        <span aria-hidden="true" className="h-5 w-[3px] bg-red-hi shadow-[0_0_10px_rgba(208,40,43,0.4)]" />
        {title}
      </h3>
      <div className="space-y-3.5 sm:space-y-4">{children}</div>
    </section>
  );
}

function FieldError({ children, id }: { children?: string; id?: string }) {
  return children ? <span id={id} role="alert" className="mt-1.5 block px-1 text-xs text-red-300">{children}</span> : null;
}

function EditField({
  label,
  icon,
  placeholder,
  value,
  onChange,
  disabled = false,
  helper,
  required = false,
  type = "text",
  error,
}: {
  label: string;
  icon: string;
  placeholder: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  helper?: string;
  required?: boolean;
  type?: string;
  error?: string;
}) {
  const fieldId = `profile-${label.toLowerCase().replaceAll(" ", "-")}`;
  const helperId = helper ? `${fieldId}-help` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="block">
      <label htmlFor={fieldId} className="mb-2 block px-1 text-sm font-semibold text-white">
        {label}{required && <span className="ml-1 text-red-hi">*</span>}
      </label>
      <span className="relative block">
        <i className={`fa-solid ${icon} pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-moon/55`} aria-hidden="true" />
        <input
          id={fieldId}
          name={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange ? (event) => onChange(event.target.value) : undefined}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={[helperId, errorId].filter(Boolean).join(" ") || undefined}
          className={`w-full rounded-lg border bg-midnight/45 py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-moon/40 focus-visible:border-red-hi/70 focus-visible:ring-2 focus-visible:ring-red-hi/30 disabled:cursor-not-allowed disabled:opacity-65 ${
            error ? "border-red-400/70 focus:border-red-400" : "border-moon/15 hover:border-moon/25"
          }`}
        />
      </span>
      {helper && <span id={helperId} className="mt-1.5 block px-1 text-xs text-moon/50">{helper}</span>}
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

function ProfilePictureBlock({
  avatarUrl,
  onAvatarChange,
  error,
}: {
  avatarUrl: string | null;
  onAvatarChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}) {
  return (
    <section className="flex flex-wrap items-center gap-4 border-b border-moon/10 pb-5 sm:gap-5 sm:pb-6">
      <div
        role="img"
        aria-label="Profile picture preview"
        className="flex size-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-moon/10 bg-moon/10 text-moon/75 sm:size-20"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="Selected profile preview" className="size-full object-cover" />
        ) : (
          <i className="fa-regular fa-user text-3xl sm:text-4xl" aria-hidden="true" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-base font-semibold text-white sm:text-lg">Profile Picture</h2>
        <p id="profile-avatar-help" className="mt-1 text-sm text-moon/65">Upload a profile photo (JPEG, PNG, WebP)</p>
        <p className="mt-1 text-xs text-moon/45">Maximum file size: 5 MB</p>
        <FieldError id="profile-avatar-error">{error}</FieldError>
      </div>
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-moon/25 bg-midnight/30 px-4 py-2.5 font-nav text-xs font-bold text-moon transition-colors hover:border-vermilion/70 hover:bg-vermilion/10 focus-within:outline-none focus-within:ring-2 focus-within:ring-vermilion">
        <i className="fa-solid fa-upload" aria-hidden="true" />
        Upload
        <input
          className="sr-only"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          aria-label="Upload a profile picture"
          aria-describedby={error ? "profile-avatar-help profile-avatar-error" : "profile-avatar-help"}
          aria-invalid={Boolean(error)}
          onChange={onAvatarChange}
        />
      </label>
    </section>
  );
}

function DepartmentField({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const departments = [
    "Information Technology",
    "Computer Science and Engineering",
    "Electronics and Communication Engineering",
  ];
  const errorId = error ? "profile-department-error" : undefined;

  return (
    <div className="block">
      <label htmlFor="profile-department" className="mb-2 block px-1 text-sm font-semibold text-white">
        Department <span className="ml-1 text-red-hi">*</span>
      </label>
      <span className="relative block">
        <i className="fa-solid fa-building-columns pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-moon/55" aria-hidden="true" />
        <select
          id="profile-department"
          name="department"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          aria-required="true"
          className={`w-full appearance-none rounded-lg border bg-midnight/45 py-3 pl-12 pr-10 text-sm text-white outline-none transition focus-visible:border-red-hi/70 focus-visible:ring-2 focus-visible:ring-red-hi/30 ${
            error ? "border-red-400/70" : "border-moon/15 hover:border-moon/25"
          }`}
        >
          <option value="" className="bg-midnight">Select your department</option>
          {departments.map((department) => (
            <option key={department} value={department} className="bg-midnight">{department}</option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-moon/60" aria-hidden="true" />
      </span>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

function YearField({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <fieldset aria-describedby={error ? "profile-year-error" : undefined}>
      <legend className="mb-2 block px-1 text-sm font-semibold text-white">
        Current Year <span className="ml-1 text-red-hi">*</span>
      </legend>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-1 py-1 sm:grid-cols-4 sm:gap-x-5">
        {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((option) => (
          <label key={option} className="inline-flex cursor-pointer items-center gap-2 text-sm text-moon/85">
            <input
              type="radio"
              name="current-year"
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              aria-label={`${option} current year`}
              className="size-[18px] accent-red-hi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-hi focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
            />
            {option.replace(" Year", "")}
          </label>
        ))}
      </div>
      <FieldError id="profile-year-error">{error}</FieldError>
    </fieldset>
  );
}

function validate(user: ProfileUser): FormErrors {
  const errors: FormErrors = {};
  if (!user.name.trim()) errors.name = "Full name is required.";
  if (!/^\d{10}$/.test(user.contactNumber.trim())) {
    errors.contactNumber = "Enter a contact number with exactly 10 digits.";
  }
  if (!user.department.trim()) errors.department = "Department is required.";
  if (!user.year.trim()) errors.year = "Please select your current year.";
  if (!user.rollNumber.trim()) errors.rollNumber = "College roll number is required.";
  return errors;
}

export default function ProfileEditForm({
  user,
  avatarUrl,
  onCancel,
  onSave,
}: {
  user: ProfileUser;
  avatarUrl: string | null;
  onCancel: () => void;
  onSave: (updatedUser: ProfileUser, avatarFile: File | null) => Promise<void>;
}) {
  const [formUser, setFormUser] = useState(user);
  const [errors, setErrors] = useState<FormErrors>({});
  const [avatarError, setAvatarError] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const previewObjectUrl = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewObjectUrl.current) URL.revokeObjectURL(previewObjectUrl.current);
    };
  }, []);

  const updateField = (field: keyof ProfileUser, value: string) => {
    const updated = { ...formUser, [field]: value };
    setFormUser(updated);
    setErrors(validate(updated));
  };

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const supportedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!supportedTypes.includes(file.type)) {
      setAvatarError("Choose a JPEG, PNG, or WebP image.");
      event.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setAvatarError("Image must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }
    setAvatarError("");
    setAvatarFile(file);
    if (previewObjectUrl.current) URL.revokeObjectURL(previewObjectUrl.current);
    previewObjectUrl.current = URL.createObjectURL(file);
    setPreviewUrl(previewObjectUrl.current);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formUser);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || saving) return;

    setSaving(true);
    try {
      await onSave({ ...formUser, name: formUser.name.trim(), contactNumber: formUser.contactNumber.trim(), rollNumber: formUser.rollNumber.trim() }, avatarFile);
    } finally {
      setSaving(false);
    }
  };

  const isValid = Object.keys(validate(formUser)).length === 0 && !avatarError;

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={saving} className="space-y-5 sm:space-y-6">
      <ProfilePictureBlock avatarUrl={previewUrl} onAvatarChange={handleAvatarChange} error={avatarError} />

      <EditSection title="Personal Information">
        <EditField
          label="Full Name"
          icon="fa-user"
          placeholder="Enter your full name"
          value={formUser.name}
          onChange={(value) => updateField("name", value)}
          required
          error={errors.name}
        />
        <EditField
          label="Email Address"
          icon="fa-envelope"
          placeholder="Registered Auth0 email"
          value={formUser.email}
          disabled
          helper="Verified email associated with your account."
          type="email"
        />
        <EditField
          label="Contact Number"
          icon="fa-phone"
          placeholder="Enter your 10-digit mobile number"
          value={formUser.contactNumber}
          onChange={(value) => updateField("contactNumber", value)}
          required
          type="tel"
          error={errors.contactNumber}
        />
      </EditSection>

      <EditSection title="Academic Information">
        <DepartmentField value={formUser.department} onChange={(value) => updateField("department", value)} error={errors.department} />
        <YearField value={formUser.year} onChange={(value) => updateField("year", value)} error={errors.year} />
        <EditField
          label="College Roll Number"
          icon="fa-hashtag"
          placeholder="Enter your college roll number"
          value={formUser.rollNumber}
          onChange={(value) => updateField("rollNumber", value)}
          required
          error={errors.rollNumber}
        />
      </EditSection>

      <div className="flex flex-wrap justify-end gap-3 border-t border-moon/10 pt-5">
        <button
          type="button"
          onClick={onCancel}
          disabled={saving}
          className="rounded-lg border border-moon/20 bg-midnight/25 px-5 py-2.5 font-nav text-xs font-bold text-moon/80 transition-colors hover:border-moon/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moon/50 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!isValid || saving}
          className="inline-flex items-center gap-2 rounded-lg border border-red-hi/80 bg-red-hi px-5 py-2.5 font-nav text-xs font-bold text-white shadow-[0_6px_18px_rgba(168,24,27,0.3)] transition-colors hover:bg-vermilion focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-hi focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:cursor-not-allowed disabled:opacity-45"
        >
          {saving ? "Saving..." : <>Save Changes <i className="fa-solid fa-arrow-right" aria-hidden="true" /></>}
        </button>
      </div>
    </form>
  );
}
