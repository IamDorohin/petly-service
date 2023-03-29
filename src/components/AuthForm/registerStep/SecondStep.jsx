import * as SC from '../Form.styled';

export const SecondStep = ({ formik, isRefreshing, isSmall }) => {
  return (
    <>
      <SC.Input
        fullWidth
        label="Name"
        type="text"
        name="name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        size={isSmall ? 'small' : 'medium'}
      />
      <SC.Input
        fullWidth
        label="City, region"
        type="text"
        name="city"
        id="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
        size={isSmall ? 'small' : 'medium'}
      />
      <SC.Input
        fullWidth
        label="Mobile phone"
        type="tel"
        name="phone"
        id="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        size={isSmall ? 'small' : 'medium'}
      />

      <SC.SubmitButton
        type="submit"
        onClick={formik.handleSubmit}
        isDisabled={formik.isSubmitting}
        isLoading={isRefreshing}
      >
        {isRefreshing ? <SC.Loader size={30} thickness={4} /> : 'Register'}
      </SC.SubmitButton>
    </>
  );
};
