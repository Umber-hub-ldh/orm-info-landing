'use client';

import { Container, Title, Text, Box, Paper, Group, ThemeIcon, Avatar } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconStarFilled } from '@tabler/icons-react';

const reviews = [
    {
        name: '김*수',
        phone: '010-****-1234',
        rating: 5,
        content: '상담부터 개통까지 30분도 안 걸렸네요. 급하게 필요했는데 정말 감사합니다.',
    },
    {
        name: '이*민',
        phone: '010-****-5678',
        rating: 5,
        content: '법인 서류가 복잡할 줄 알았는데 안내해주신 대로 하니 금방 끝났어요.',
    },
    {
        name: '박*준',
        phone: '010-****-9012',
        rating: 5,
        content: '기존 위약금 때문에 고민이었는데 해결 방안을 잘 제시해주셔서 부담 없이 바꿨습니다.',
    },
    {
        name: '정*우',
        phone: '010-****-3456',
        rating: 5,
        content: '담당 매니저님이 너무 친절하시고 답변도 빠르셔서 믿음이 갑니다.',
    },
    {
        name: '최*영',
        phone: '010-****-7890',
        rating: 5,
        content: '여러 군데 견적 받아봤는데 여기가 조건이 제일 좋았어요. 강력 추천합니다!',
    },
    {
        name: '강*호',
        phone: '010-****-2345',
        rating: 5,
        content: '사무실 이전하면서 인터넷이랑 같이 신청했는데 결합 할인 혜택이 쏠쏠하네요.',
    },
];

// Duplicate reviews to create seamless loop
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

export function Reviews() {
    return (
        <Box py={80} id="reviews" bg="white" style={{ overflow: 'hidden' }}>
            <Container size="lg" mb={60}>
                <Title order={2} ta="center" c="navy.9" mb="md">
                    고객 이용 후기
                </Title>
                <Text ta="center" c="dimmed">
                    오름정보통신을 이용해주신 1,000+ 기업 고객님들의 실제 후기입니다.
                </Text>
            </Container>

            <Box style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                {/* Gradient Masks for fading effect */}
                <Box
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '150px',
                        zIndex: 2,
                        background: 'linear-gradient(to right, white, transparent)',
                        pointerEvents: 'none'
                    }}
                />
                <Box
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '150px',
                        zIndex: 2,
                        background: 'linear-gradient(to left, white, transparent)',
                        pointerEvents: 'none'
                    }}
                />

                <motion.div
                    animate={{ x: ['0%', '-33.33%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20, // Adjust speed here
                            ease: "linear",
                        },
                    }}
                    style={{
                        display: 'flex',
                        gap: '24px',
                        width: 'fit-content',
                        paddingLeft: '24px', // Initial offset
                    }}
                >
                    {duplicatedReviews.map((review, index) => (
                        <Paper
                            key={index}
                            shadow="sm"
                            radius="md"
                            p="lg"
                            withBorder
                            style={{
                                width: '300px',
                                flexShrink: 0,
                                backgroundColor: '#F8F9FA'
                            }}
                        >
                            <Group mb="sm">
                                <Avatar color="orange" radius="xl">
                                    {review.name.charAt(0)}
                                </Avatar>
                                <div>
                                    <Text size="sm" fw={700} c="navy.9">
                                        {review.name}
                                    </Text>
                                    <Text size="xs" c="dimmed">
                                        {review.phone}
                                    </Text>
                                </div>
                                <Group ml="auto" gap={2}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <IconStarFilled key={i} size={14} color="#FF7A00" />
                                    ))}
                                </Group>
                            </Group>
                            <Text size="sm" c="gray.7" lh={1.5} lineClamp={3}>
                                "{review.content}"
                            </Text>
                        </Paper>
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
}
