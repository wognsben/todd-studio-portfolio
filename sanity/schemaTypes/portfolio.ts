import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '프로젝트 제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: '연도',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '설명',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(50).max(500),
      description: '50-500자 사이로 작성해주세요',
    }),
    defineField({
      name: 'mainImage',
      title: '메인 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt 텍스트',
        },
      ],
      validation: (Rule) => Rule.required(),
      description: '권장 사이즈: 1200x900px',
    }),
    defineField({
      name: 'images',
      title: '추가 이미지',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt 텍스트',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(5),
      description: '최소 2개, 최대 5개 (권장: 800x600px)',
    }),
    defineField({
      name: 'videoUrl',
      title: '영상 URL (선택)',
      type: 'url',
      description: 'YouTube 또는 Vimeo 링크 (예: https://www.youtube.com/watch?v=...)',
    }),
    defineField({
      name: 'videoFile',
      title: '영상 파일 업로드 (선택)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'MP4, WebM 등 영상 파일 직접 업로드 (최대 100MB 권장)',
    }),
    defineField({
      name: 'order',
      title: '정렬 순서',
      type: 'number',
      description: '작은 숫자가 먼저 표시됩니다 (선택사항)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'mainImage',
    },
  },
  orderings: [
    {
      title: '생성일 (최신순)',
      name: 'createdAtDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
    {
      title: '정렬 순서',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})

