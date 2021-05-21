import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { formElementChange } from 'src/utils';
import {
  createSection,
  editSection,
  loadSection
} from 'src/redux/actions/actionCreators/sectionActionCreators';
import { AppState } from 'src/redux/reducers';
import { InlineLoader } from 'src/components/InlineLoader';
import { useStyles } from './AdminSectionAddForm.style';

export interface IFormData {
  name: string;
  text: string;
}

export const AdminSectionAddForm: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const section = useSelector((state: AppState) => state.section.data);
  const loading = useSelector((state: AppState) => state.section.loading);
  const error = useSelector((state: AppState) => state.section.error);

  const [data, setData] = useState<IFormData>({
    name: '',
    text: ''
  });

  const [image, setImage] = useState<{ file: File | null; preview: string }>({
    file: null,
    preview: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formElementChange<IFormData>(e, setData, data);
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage({
      preview: URL.createObjectURL(e.target.files![0]),
      file: e.target.files![0]
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('text', data.text);
    const { file } = image;
    if (file) formData.append('img', file);
    if (id) formData.append('id', id);
    if (id) dispatch(editSection(formData));
    else dispatch(createSection(formData));
  };

  useEffect(() => {
    id && dispatch(loadSection(id));
  }, []);

  useEffect(() => {
    if (section) {
      setData({
        name: section.name,
        text: section.text
      });
      setImage({
        ...image,
        preview: section.img
      });
    }
  }, [section]);

  if (loading) {
    return <InlineLoader />;
  }

  return (
    <>
      {error && error.toString()}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
          size="small"
          onChange={handleChange}
          value={data.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          rows={5}
          name="text"
          label="Text"
          id="text"
          size="small"
          onChange={handleChange}
          value={data.text}
        />
        <Avatar
          alt="icon preview"
          src={image.preview}
          variant="square"
          className={classes.icon}
        />
        <Typography color="textSecondary" className={classes.iconAnnotation}>
          Минимум 80х80px, рекомендуемый 192х192px(соотношение сторон 1 к 1)
          Поддерживаемые форматы: JPG, PNG, GIF
        </Typography>

        <label htmlFor="icon-button-file">
          <input
            accept="image/*"
            id="icon-button-file"
            multiple
            type="file"
            hidden
            name="icon"
            onChange={handleImagePreview}
          />
          <Button variant="outlined" color="primary" component="span">
            Изменить иконку
          </Button>
        </label>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {id ? 'Edit' : 'Add'} Section
        </Button>
      </form>
    </>
  );
};
