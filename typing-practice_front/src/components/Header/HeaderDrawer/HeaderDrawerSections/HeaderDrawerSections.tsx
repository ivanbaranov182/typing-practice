import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/reducers';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { LESSON_ROUTE, SECTIONS_ROUTE } from 'src/utils/routes';
import { InlineLoader } from '../../../InlineLoader';
import { useStyles } from './HeaderDrawerSections.style';

export const HeaderDrawerSections: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [expandedSection, setExpandedSection] = useState<string>('');

  const sections = useSelector((state: AppState) => state.sections.data);
  const section = useSelector((state: AppState) => state.section.data);
  const lesson = useSelector((state: AppState) => state.lesson.data);
  const loading = useSelector((state: AppState) => state.sections.loading);

  useEffect(() => {
    if (section?.id || lesson?.sectionId)
      setExpandedSection(String(section?.id || lesson?.sectionId));
  }, [section?.id, lesson?.sectionId]);

  if (loading) return <InlineLoader />;

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      disableSelection
      selected=""
      expanded={[expandedSection]}
    >
      {sections.map((section) => (
        <TreeItem
          nodeId={String(section.id)}
          label={section.name}
          key={section.id}
          onClick={() => {
            setExpandedSection(String(section.id));
            history.push(`${SECTIONS_ROUTE}/${section.id}`);
          }}
        >
          {section.lessons &&
            section.lessons.map((lesson) => (
              <TreeItem
                nodeId={`${section.id}${lesson.id}`}
                key={`${section.id}${lesson.id}`}
                label={lesson.name}
                onClick={() => history.push(`${LESSON_ROUTE}/${lesson.id}`)}
              />
            ))}
        </TreeItem>
      ))}
    </TreeView>
  );
};
