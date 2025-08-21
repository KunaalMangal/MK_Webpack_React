import authorData from '../data/author.json';
import { Author } from '../types/author';

// Type assertion to ensure the JSON data matches our interface
const author: Author = authorData as Author;

export const getAuthorData = (): Author => {
  return author;
};

export const getAuthorName = (): string => {
  return author.name;
};

export const getAuthorTitle = (): string => {
  return author.title;
};

export const getAuthorDescription = (): string => {
  return author.description;
};

export const getAuthorSocial = () => {
  return author.social;
};

export const getAuthorProject = () => {
  return author.project;
};

export const getAuthorSkills = () => {
  return author.skills;
};

export const getAuthorFellowship = () => {
  return author.fellowship;
};

export const getAuthorCommunityLinks = () => {
  return author.communityLinks;
};

export default author;
