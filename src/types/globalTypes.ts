/*
  These are just default names, you can change the sections to
  things of your choosing!
*/
export enum HeaderSections {
  LANDING_SECTION = 'landingSection',
  TITLE_SECTION = 'titleSection',
  LEARNING_SECTION = 'learningSection',
  CODE_SECTION = 'codeSection',
  DEMO_SECTION = 'Demo',
  POINTER_MOTIVATION = 'Why Pointers?',
  LESSON_1 = 'Lesson 1',
  LESSON_2 = 'Lesson 2',
  LESSON_3 = 'Lesson 3',
  EXERCISE_1 = 'Exercise 1',
  LESSON_4 = 'Lesson 4',
}

// lessons and exercises may have multiple pages, this is their starting URL
export enum PageURLs {
  HOME = '/',
  DEMO = '/demo',
  POINTER_MOTIVATION = '/pointer-motivation',
  LESSON_1 = '/lesson-1',
  LESSON_2 = '/lesson-2-1',
  LESSON_3 = '/lesson-3',
  LESSON_4 = '/lesson-4',
  LESSON_5 = '/lesson-5',
  LESSON_6 = '/lesson-6',
  LESSON_7 = '/lesson-7',
  LESSON_8 = '/lesson-8',
  EXERCISE_1 = '/exercise-1',
  EXERCISE_2 = '/exercise-2',
  EXERCISE_3 = '/exercise-3',
}

// order navigated by NavButtons component
export enum PageOrder {
  '/',
  '/pointer-motivation',
  '/demo',
  '/lesson-1',
  '/lesson-2-1',
  '/lesson-2-2',
  '/lesson-3',
  '/lesson-4',
  /*'/lesson-5',
  '/lesson-6',
  '/lesson-7',
  '/lesson-8', */
  '/exercise-1',
}
