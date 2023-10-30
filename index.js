const burgerBtn = document.querySelector('#burger-btn');
const xBtn = document.querySelector('#x-btn');
const mobileNavigation = document.querySelector('#mobile-navigation');

burgerBtn.addEventListener('click', () => {
  mobileNavigation.style.width = '30.4rem';
});

xBtn.addEventListener('click', () => {
  mobileNavigation.style.width = '0rem';
});

const notStaked = document.querySelector("path[name='not staked']");
const inLiquidity = document.querySelector("path[name='in liquidity']");
const tooltip = document.querySelector('.main-section__card__right__tooltip');

notStaked.addEventListener('mouseenter', () => {
  tooltip.style.display = 'flex';
  tooltip.style.transform = 'translate(5px, 40.3657px)';
  tooltip.textContent = '6% not staked';
});

notStaked.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

inLiquidity.addEventListener('mouseenter', () => {
  tooltip.style.display = 'flex';
  tooltip.style.transform = 'translate(5px, 132.634px)';
  tooltip.textContent = '94% in liquidity';
});

inLiquidity.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

const eth = document.querySelector("path[name='ETH']");
const usdc = document.querySelector("path[name='USDC']");
const tooltip2 = document.querySelector(
  '.main-section__card__right__tooltip-2'
);

eth.addEventListener('mouseenter', () => {
  tooltip2.style.display = 'flex';
  tooltip2.style.transform = 'translate(70.2967px, 114.841px)';
  tooltip2.textContent = '50.49% ETH';
});

eth.addEventListener('mouseleave', () => {
  tooltip2.style.display = 'none';
});

usdc.addEventListener('mouseenter', () => {
  tooltip2.style.display = 'flex';
  tooltip2.style.transform = 'translate(38.5002px, 115.159px)';
  tooltip2.textContent = '49.5% USDC';
});

usdc.addEventListener('mouseleave', () => {
  tooltip2.style.display = 'none';
});
