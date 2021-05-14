import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { InlineLoader } from 'src/components/InlineLoader';
import { loadSection } from 'src/redux/actions/actionCreators/sectionActionCreators';
import { AppState } from 'src/redux/reducers';

export const Section: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const section = useSelector((state: AppState) => state.section.data);
  const loading = useSelector((state: AppState) => state.section.loading);

  useEffect(() => {
    id && dispatch(loadSection(id));
  }, [id]);

  if (loading) {
    return <InlineLoader />;
  }

  return <>Section Page</>;
};
